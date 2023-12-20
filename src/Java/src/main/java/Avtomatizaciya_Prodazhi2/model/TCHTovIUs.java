package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧТовИУс
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2ТЧТовИУс")
@Table(schema = "public", name = "ТЧТовИУс")
public class TCHTovIUs {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Сумма")
    private Integer сумма;

    @Column(name = "СуммаНДС")
    private Integer суммандс;

    @Column(name = "Количестов")
    private Integer количестов;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "КолКЗаказПоста")
    private Integer колкзаказпоста;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenk")
    @Convert("Nomenk")
    @Column(name = "Номенк", length = 16, unique = true, nullable = false)
    private UUID _nomenkid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenk", insertable = false, updatable = false)
    private Nomenk nomenk;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OtchOProd")
    @Convert("OtchOProd")
    @Column(name = "ОтчОПрод", length = 16, unique = true, nullable = false)
    private UUID _otchoprodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OtchOProd", insertable = false, updatable = false)
    private OtchOProd otchoprod;


    public TCHTovIUs() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСумма() {
      return сумма;
    }

    public void setСумма(Integer сумма) {
      this.сумма = сумма;
    }

    public Integer getСуммаНДС() {
      return суммандс;
    }

    public void setСуммаНДС(Integer суммандс) {
      this.суммандс = суммандс;
    }

    public Integer getКоличестов() {
      return количестов;
    }

    public void setКоличестов(Integer количестов) {
      this.количестов = количестов;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Integer getКолКЗаказПоста() {
      return колкзаказпоста;
    }

    public void setКолКЗаказПоста(Integer колкзаказпоста) {
      this.колкзаказпоста = колкзаказпоста;
    }


}