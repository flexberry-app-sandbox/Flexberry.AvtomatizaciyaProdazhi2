package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ОтчОстНСкл
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2ОтчОстНСкл")
@Table(schema = "public", name = "ОтчОстНСкл")
public class OtchOstNSkl {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Колл")
    private Integer колл;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklady")
    @Convert("Sklady")
    @Column(name = "Склады", length = 16, unique = true, nullable = false)
    private UUID _skladyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklady", insertable = false, updatable = false)
    private Sklady sklady;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KolVRez")
    @Convert("KolVRez")
    @Column(name = "КолВРез", length = 16, unique = true, nullable = false)
    private UUID _kolvrezid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KolVRez", insertable = false, updatable = false)
    private KolVRez kolvrez;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenk")
    @Convert("Nomenk")
    @Column(name = "Номенк", length = 16, unique = true, nullable = false)
    private UUID _nomenkid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenk", insertable = false, updatable = false)
    private Nomenk nomenk;


    public OtchOstNSkl() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getКолл() {
      return колл;
    }

    public void setКолл(Integer колл) {
      this.колл = колл;
    }


}