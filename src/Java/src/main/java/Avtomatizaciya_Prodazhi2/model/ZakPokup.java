package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ЗакПокуп
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2ЗакПокуп")
@Table(schema = "public", name = "ЗакПокуп")
public class ZakPokup {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаОкончания")
    private Date датаокончания;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "СостОтгруз")
    private String состотгруз;

    @Column(name = "СостОплат")
    private String состоплат;

    @Column(name = "Сумма")
    private Integer сумма;

    @Column(name = "СумВклНДС")
    private Boolean сумвклндс;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklady")
    @Convert("Sklady")
    @Column(name = "Склады", length = 16, unique = true, nullable = false)
    private UUID _skladyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklady", insertable = false, updatable = false)
    private Sklady sklady;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organiz")
    @Convert("Organiz")
    @Column(name = "Организ", length = 16, unique = true, nullable = false)
    private UUID _organizid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organiz", insertable = false, updatable = false)
    private Organiz organiz;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontr")
    @Convert("Kontr")
    @Column(name = "Контр", length = 16, unique = true, nullable = false)
    private UUID _kontrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontr", insertable = false, updatable = false)
    private Kontr kontr;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Menedzh")
    @Convert("Menedzh")
    @Column(name = "Менедж", length = 16, unique = true, nullable = false)
    private UUID _menedzhid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Menedzh", insertable = false, updatable = false)
    private Menedzh menedzh;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Podraz")
    @Convert("Podraz")
    @Column(name = "Подраз", length = 16, unique = true, nullable = false)
    private UUID _podrazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Podraz", insertable = false, updatable = false)
    private Podraz podraz;

    @OneToMany(mappedBy = "otchoprod", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHTovIUs> tchtoviuss;


    public ZakPokup() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаОкончания() {
      return датаокончания;
    }

    public void setДатаОкончания(Date датаокончания) {
      this.датаокончания = датаокончания;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public String getСостОтгруз() {
      return состотгруз;
    }

    public void setСостОтгруз(String состотгруз) {
      this.состотгруз = состотгруз;
    }

    public String getСостОплат() {
      return состоплат;
    }

    public void setСостОплат(String состоплат) {
      this.состоплат = состоплат;
    }

    public Integer getСумма() {
      return сумма;
    }

    public void setСумма(Integer сумма) {
      this.сумма = сумма;
    }

    public Boolean getСумВклНДС() {
      return сумвклндс;
    }

    public void setСумВклНДС(Boolean сумвклндс) {
      this.сумвклндс = сумвклндс;
    }


}